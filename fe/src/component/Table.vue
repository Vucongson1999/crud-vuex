<template>
  <div class="table">

  <div class="up">
    <el-input  v-model="name" placeholder="nhap ten can them" />
    <el-button type="success" @click="addStudent({ name })">ADD</el-button>
  </div>

    <div class="up">
      <el-input v-model="nameUpdate" placeholder="sua" />
      <el-button type="success" @click="updateStudent({ id, nameUpdate })"
        >UPDATE</el-button
      >
    </div>

    <div class="up">
      <el-input v-model="textSearch" placeholder="nhap ten tim kiem" />
      <el-button type="primary" icon="el-icon-search"  @click="searchStudent({ textSearch: textSearch, activePage: 1 })"
        >SEARCH</el-button
      >
    </div>

    <div v-if="isLoading">
      <img src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="">
    </div>
    <div v-else>
      <table id="customers">
      <thead>
        <tr>
        <th >STT</th>
        <th >NAME</th>
        <th >Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listStudents" :key="index">
          <td>{{ index + 1 + (activePage - 1) * 5 }}</td>
          <td>{{ item.name }}</td>
          <td>
            <el-button
              type="danger"
              icon="el-icon-delete" circle=""
              @click="deleteStudent(item._id)"
              ></el-button
            >
            <el-button
              type="primary"
              icon="el-icon-edit" circle=""
              @click="handleClickEdit(item._id, item.name)"
              ></el-button
            >
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    

    <div v-if="textSearch !='' ">
      <el-button
        id="pagi" circle=""
        type="danger"
        v-for="index in totalPage"
        :key="index"
        @click="() => handleClickSearch(index)"
        :style="activePage  === index ? 'background: blue' : ''"
      >
        {{ index }}
      </el-button>
    </div>

    <div v-else>
      <el-button
        id="pagi"
        type="danger" circle=""
        v-for="index in totalPage"
        :key="index"
        @click="() => handleButton(index)"
        :style="activePage === index ? 'background: blue' : ''"
      >
        {{ index }}
      </el-button>
    </div>


    <!-- <button 
           v-for="n in totalPage" :key="n"
           @click="handleButton(n)" 
           :style="activePage==n ? 'background:red' : '' "
        > 
            {{n}}
        </button> -->
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      nameUpdate: "",
      id: "",
      name: "",
      textSearch: ""
    };
  },
  props: {
    addStudent: Function,
    deleteStudent: Function,
    updateStudent: Function,
    totalPage: Number,
    activePage: Number,
    paginationStudent: Function,
    searchStudent: Function,
    isLoading: Boolean,
    listStudents: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClickEdit(id, nameUpdate) {
      this.id = id, 
      this.nameUpdate = nameUpdate;
    },
    handleClickSearch(index) {
      this.searchStudent({
        activePage: index,
        textSearch: this.textSearch 
      })
    },
    handleButton(index) {
      this.paginationStudent(index);
    },
  },
};
</script>

<style scoped>
/* table {
  margin: auto;
  margin-top: 20px;
} */
.up {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  margin-top: 10px;
}
#pagi{
    margin-top: 20px;
}


#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 50%;
  margin:  auto;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04AA6D;
  color: white;
}
</style>