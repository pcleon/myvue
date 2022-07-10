<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">
    <el-table-column
      v-loading="loading"
      align="center"
      width="200px"
      label="实例"
      element-loading-text="耐心等待"
    >
      <template slot-scope="{row}">
        <span>{{ row.db_name }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="主库">
      <template slot-scope="{row}">
        <span>{{ row.master }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="备库">
      <template slot-scope="{row}">
        <span>{{ row.slave }}</span>
      </template>
    </el-table-column>

    <el-table-column width="220px" align="center" label="vip">
      <template slot-scope="{row}">
        <span>{{ row.vip }} </span>
        <el-tag :type="row.v_tag | vTagFilter">{{ row.v_tag }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="仲裁">
      <template slot-scope="{row}">
        <span>{{ row.arbit }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchHaList } from '@/api/ha'

export default {
  filters: {
    vTagFilter(v_tag) {
      const tagMap = {
        master: '',
        slave: 'danger'
      }
      return tagMap[v_tag]
    }
  },
  props: {
    arbit: {
      type: String,
      default: ''
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

