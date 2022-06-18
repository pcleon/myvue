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
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.date_joined }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="上次登录" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          {{ scope.row.last_login }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.is_active | statusFilter">{{ scope.row.is_active }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="角色" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.roles_name }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUserList } from '@/api/table'

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
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getUserList().then(response => {
        this.list = response.data.items
        // this.list = response.data
        console.log(this.list)
        this.listLoading = false
      })
    }
  }
}
</script>
