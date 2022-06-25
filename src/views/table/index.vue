<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="用户ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="用户名" width="100">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="电话" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.mobile }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="团队" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.team }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="员工" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.date_join }}</span>
        </template>
      </el-table-column> -->
      <el-table-column align="center" prop="created_at" label="创建时间" >
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.date_joined }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="上次登录" >
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          {{ scope.row.last_login }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.is_active | statusFilter">{{ scope.row.is_active }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="角色">
        <template slot-scope="scope">
          <span>{{ scope.row.roles_name }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"
    />
  </div>
</template>

<script>
import { getUserList } from '@/api/table'
import Pagination from '@/components/Pagination'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        'true': 'success',
        // draft: 'gray',
        'false': 'danger'
      }
      return statusMap[status]
    }
  },
  components: { Pagination },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 2,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getUserList(this.listQuery).then(response => {
        this.list = response.data.results
        this.total = response.data.total
        // this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
