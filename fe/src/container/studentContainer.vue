<template>
  <div class="studentContainer">
    <!-- <From :addStudent="addStudent" /> -->
    <!-- <div v-if="isLoading">
      <img
        src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif"
        alt=""
      />
    </div> --> 
      <Table
        :addStudent="addStudent"
        :listStudents="paginationList"
        :deleteStudent="deleteStudent"
        :updateStudent="updateStudent"
        :totalPage="totalPage"
        :activePage="activePage"
        :paginationStudent="paginationStudent"
        :searchStudent="searchStudent"
        :textSearch="textSearch"
        :isLoading = 'isLoading'
      />
    <!-- //truyen xuong cho component-->
  </div>
</template>
<script>
import Table from "../component/Table.vue";
// import From from "../component/From.vue";
import * as types from "../store/studentModule/types";
import { mapState, mapActions } from "vuex";
export default {
  setup() {},
  components: {
    Table,
    // From,
  },
  computed: {
    ...mapState({
      //listStudents: (state) => state.student.listStudents,
      paginationList: (state) => state.student.listStudents,
      totalPage: (state) => state.student.totalPage,
      activePage: (state) => state.student.activePage,
      isLoading: (state) => state.student.isLoading,
      textSearch: (state) => state.student.textSearch,
    })
  },
  mounted() {
    //this.getListStudent();
   
    this.paginationStudent(1);
  },
  methods: {
    ...mapActions({
      // getListStudent: "student/" + types.GET_STUDENT_REQUEST,
      addStudent: "student/" + types.ADD_STUDENT_REQUEST,
      deleteStudent: "student/" + types.DELETE_STUDENT_REQUEST,
      updateStudent: "student/" + types.UPDATE_STUDENT_REQUEST,
      paginationStudent: "student/" + types.PAGINATION_STUDENT_REQUEST,
      searchStudent: "student/" + types.SEARCH_STUDENT_REQUEST,
    }),
  },
};
</script>