<template>
<el-dialog :title="title" :visible.sync="dialogVisible" :width="width" :before-close="handleClose" :modal-append-to-body="false" class="data_dialog" :close-on-click-modal="false">
    <div class="input_picker_body" :style="`grid-template-columns: 1fr ${multiple ? '1fr' : ''}`">
        <!-- 待选卡片 -->
        <el-card class="box-card" shadow="never">
            <div slot="header" class="card_header_div">
                <span v-if="multiple">待选</span>
                <el-input :readonly="loading" placeholder="请输入内容后回车查询" prefix-icon="el-icon-search" size="small" @change="searchData(true)" clearable v-model="searchText">
                </el-input>
                <div v-if="multiple">
                    <el-button :disabled="loading" type="text" size="small" @click="changeAllSels(true)">全选(本页)</el-button>
                    <el-button :disabled="loading" type="text" size="small" @click="changeAllSels(false)">清除(本页)</el-button>
                </div>
            </div>
            <el-table :data="waitSelData" height="300" :show-header="false" size="mini" style="width: 100%" v-loading="loading" :highlight-current-row="!multiple" @current-change="curRow=arguments[0]">
                <el-table-column width="55" v-if="multiple">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.checked" @change="val=>checkboxChange(val,scope.row.text)"></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column prop="text">
                </el-table-column>
            </el-table>
            <el-pagination :disabled="loading" @current-change="searchData" :current-page.sync="pageInfo.currentPage" :page-size="pageInfo.pageSize" layout="total, prev, pager, next" :total="pageInfo.total">
            </el-pagination>
        </el-card>
        <!-- 已选卡片 -->
        <el-card class="box-card" shadow="never" v-show="multiple">
            <div slot="header" class="card_header_div">
                <span>已选</span>
                <el-button type="text" size="small" @click="haveSelData=[]">清空已选</el-button>
            </div>
            <el-table :data="haveSelData" height="300" :show-header="false" size="mini" style="width: 100%">
                <el-table-column>
                    <template slot-scope="scope">
                        <label>{{scope.row}}</label>
                    </template>
                </el-table-column>
                <el-table-column width="55">
                    <template slot-scope="scope">
                        <i class="el-icon-close" style="cursor:pointer;" @click="removeSel(scope.row)"></i>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button @click="close">关 闭</el-button>
        <el-button @click="okSubmit" type="primary" :disabled="multiple ? haveSelData.length==0 : curRow==null">确 定</el-button>
    </span>
</el-dialog>
</template>

<script>
export default {
    props: {
        dialogVisible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '请选择'
        },
        inputVal: {
            type: String,
            default: '',
        },
        queryFn: {
            type: Function,
            default: ()=>{}
        },
        multiple:Boolean,
        multipleLimit:Number,
        separator: String, //链接分隔符
    },
    data() {
        return {
            width: this.multiple ? '60%' : '30%',
            searchText: '',
            haveSelData: [],//已选
            loading: false,//待选表格遮罩
            curRow: null,//单选时的当前选中行
            pageInfo: {
                currentPage: 1,
                pageSize: 20,
                total: 0,
                data: []
            }
        }
    },

    methods: {
        //处理头部关闭按钮事件
        handleClose() {
            this.close();
        },

        close() {
            this.$emit('update:dialogVisible', false);
        },

        //数据查询接口方法
        searchData(isSearch=false) {
            isSearch === true && (this.pageInfo.currentPage=1);//如果是回车查询，则页面归1
            this.loading = true;
            const query = {
                pageNum: this.pageInfo.currentPage,
                pageSize: this.pageInfo.pageSize,
                q: this.searchText
            }
            this.queryFn(query, (pageInfo)=>{
                const {total, data} = pageInfo;
                this.pageInfo.total = total;
                this.pageInfo.data = data;
                
                this.loading = false;
            });
        },
        
        //全选取消全选
        changeAllSels(selsAll){
            const pageTexts = this.pageInfo.data.reduce((r, c)=>{r.push(String(c));return r}, []);
            if(selsAll) {
                this.haveSelData.push(...pageTexts);
                this.haveSelData = Array.from(new Set(this.haveSelData));//去重
            } else {
                const news = this.haveSelData.filter(n => !pageTexts.includes(n));
                this.haveSelData = news;
            }
        },

        // 多选框点击改变事件
        checkboxChange(val, text){
            text = String(text);
            let temp = [].concat(this.haveSelData);
            if(val){
                !temp.includes(val) && temp.push(text);
            }else{
                const idx = temp.findIndex(n=>n==text);
                idx > -1 && temp.splice(idx,1);
            }
            this.haveSelData = temp;
        },

        // 移除选中项
        removeSel(text){
            let temp = [].concat(this.haveSelData);
            temp = temp.filter(n=>n!=text);
            this.haveSelData = temp;
        },

        okSubmit() {
            if(this.multiple === true){//多选
                if(this.multipleLimit > 0 && this.haveSelData.length > this.multipleLimit){
                    this.$message({
                        message: `您选择数据条数已经超过最大条数(${this.multipleLimit}条)，请重新选择`,
                        type: 'warning'
                    });
                    return;
                }
                this.$emit('submit', this.haveSelData.join(this.separatorFlag))
            }else{//单选
                this.$emit('submit', this.curRow.text)
            }

            // 关闭窗口
            this.close();
        }
    },
    computed: {
        // 备选
        waitSelData() {
            const waitArr = [];
            this.pageInfo.data.forEach(n=>{
                waitArr.push({text:n, checked:this.haveSelData.includes(String(n))});
            });
            return waitArr;
        },
        separatorFlag(){
            return this.separator || ','
        }
    },
    watch: {
        // 打开窗口时，查询备选数据
        dialogVisible(val){
            // 初始化已选内容
            this.haveSelData =  (this.inputVal || '').split(',').filter(n=>n.trim().length>0);
            val===true && this.searchData();
        }
    }

}
</script>

<style lang="less" scoped>
.data_dialog {
    /deep/.el-dialog__header {
        padding: 20px 20px 0px;
    }

    /deep/.el-dialog__body {
        padding: 15px 20px;

        ul {
            margin: 0;
        }

        .el-card__header {
            padding: 8px;
            line-height: 30px;

            .card_header_div {
                display: flex;
                justify-content: space-between;

                &>span {
                    width: 50px;
                }

                &>div.el-input {
                    width: 50%;
                    min-width: 175px;
                }

                &>div:last-of-type {
                    flex: 1;
                    text-align: right;
                }
            }
        }
    }

    /deep/.el-dialog__footer {
        padding: 0 20px 20px;
    }

    .input_picker_body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;

        /deep/.el-card__body {
            padding: 10px;
        }
        /deep/li {
            margin-top: 0;
        }
    }

}
</style>
