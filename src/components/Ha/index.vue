<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">

    <el-table-column
      v-loading="loading"
      align="center"
      label="实例"
      element-loading-text="耐心等待"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.db_name }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="主库">
      <template slot-scope="scope">
        <span>{{ scope.row.master }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="备库">
      <template slot-scope="scope">
        <span>{{ scope.row.slave }}</span>
      </template>
    </el-table-column>

    <el-table-column width="200px" align="center" label="vip">
      <template slot-scope="scope">
        <span>{{ scope.row.vip }}</span>
        <el-tag>{{ scope.row.v_tag }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="仲裁">
      <template slot-scope="scope">
        <span>{{ scope.row.arbit }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchHaList } from '@/api/ha'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    arbit: {
      type: String
    }
  },
  data() {
    return {
      list: null,
      listQuery: {
        // page: 1,
        // limit: 5,
        arbit: this.arbit
        // sort: '+id'
      },
      loading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      this.$emit('create') // for test
      fetchHaList(this.listQuery).then(response => {
        this.list = response.data
        this.loading = false
      })
    }
  }
}
</script>

