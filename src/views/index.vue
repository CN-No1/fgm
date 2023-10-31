<template>
  <div>
    <!-- <div class="form-wrappeer">
      <el-form ref="form" :model="form" label-width="100px" inline>
        <el-form-item label="活动名称">
          <el-select
            clearable
            v-model="form.activityId"
            placeholder="请选择活动名称"
            filterable
            style="width:300px"
          >
            <el-option
              v-for="item in avticyOptions"
              :key="item.activityId"
              :label="item.activityName"
              :value="item.activityId"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="打卡日期">
          <el-date-picker
            ref="datetime"
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            style="width:400px"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="派单号码">
          <el-input
            v-model="form.targetObjNbr"
            style="width:200px"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="收单人号码">
          <el-input
            v-model="form.contactObject"
            style="width:200px"
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
    </div> -->
    <div class="btn-wrapper">
      <el-button type="success" size="mini" @click="handleAdd"
        >新增模板</el-button
      >
    </div>
    <el-table
      stripe
      border
      height="800px"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      v-loading="loading"
      sortable
    >
      <el-table-column label="序号" type="index" width="55"></el-table-column>
      <el-table-column
        prop="templateName"
        label="模板名称"
        sortable
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        sortable
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="创建时间"
        sortable
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column
        prop=""
        label="操作"
        sortable
        :show-overflow-tooltip="true"
      >
        <template slot-scope="{ row }">
          <el-button @click="handleEdit(row)" type="text"> 修改 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="text-align: right; margin-top: 24px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import https from '../utils/http';
export default {
  data() {
    return {
      page: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      loading: false,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    handleAdd() {
      this.$router.push({
        name: 'detail',
      });
    },
    getList() {
      const params = {
        pageNum: this.page,
        pageSize: this.pageSize,
      };
      https.post('/api/orderHandle/queryTemplate', params).then(({ data }) => {
        this.loading = false;
        if (data.resultCode == 1) {
          this.tableData = data.resultData.data;
          this.total = data.resultData.recordsTotal;
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    handleEdit(row) {
      this.$router.push({
        name: 'detail',
        params: row,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.form-wrappeer {
  overflow: hidden;
  transition: all 0.5s;
  height: 50px;
  .collapse-btn {
    float: right;
  }
}
.btn-wrapper {
  width: 100%;
  text-align: right;
  padding: 20px 0;
}
</style>
