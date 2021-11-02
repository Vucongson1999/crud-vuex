import actions from "./actions";
import * as types from "./types";

const INITIAL_STATE = {
  isLoading: false,
  listStudents: [],
  message: "",
  error: false,
  totalPage: 0,
  activePage: 1,
  textSearch: "",
};
const studentModule = {
  namespaced: true,
  state: () => INITIAL_STATE,
  getters: {},
  actions,
  mutations: {
    [types.PAGINATION_STUDENT_REQUEST](state) {
      console.log("jijii");
      state.isLoading = true;
    },
    [types.PAGINATION_STUDENT_SUCCESS](state, listStudents) {
      state.isLoading = false, 
      state.error = false;
      state.listStudents = listStudents.listData;
      state.totalPage = listStudents.totalPage;
      state.activePage = listStudents.activePage;
    },
    [types.PAGINATION_STUDENT_FAILURE](state, error) {
      state.isLoading = false,
      state.error = true,
      state.message = error.message;
    },
    [types.GET_STUDENT_REQUEST](state) {
      state.isLoading = true;
    },
    [types.GET_STUDENT_SUCCESS](state, listStudents) {
      state.isLoading = false,
      state.listStudents = listStudents,
      state.error = false;
    },
    [types.GET_STUDENT_FAILURE](state, error) {
      state.isLoading = false,
      state.error = true,
      state.message = error.message;
    },
    [types.ADD_STUDENT_REQUEST](state) {
      state.isLoading = true;
    },
    [types.ADD_STUDENT_SUCCESS](state) {
      state.isLoading = false;
      state.error = false;
    },
    [types.ADD_STUDENT_FAILURE](state, error) {
      state.isLoading = false;
      state.error = true;
      state.message = error.message;
    },
    // [types.INITIAL_STATE](state, error) {
    //   (state = INITIAL_STATE), (state.error = error);
    // },
    //delete
    [types.DELETE_STUDENT_REQUEST](state) {
      state.isLoading = true;
    },
    [types.DELETE_STUDENT_SUCCESS](state) {
      (state.isLoading = false), (state.error = false);
    },
    [types.DELETE_STUDENT_FAILURE](state, error) {
      (state.isLoading = false),
        (state.error = true),
        (state.message = error.message);
    },
    //UPDATE
    [types.UPDATE_STUDENT_REQUEST](state) {
      state.isLoading = true;
    },
    [types.UPDATE_STUDENT_SUCCESS](state) {
      (state.isLoading = false), (state.error = false);
    },
    [types.UPDATE_STUDENT_FAILURE](state, error) {
      (state.isLoading = false),
        (state.error = true),
        (state.message = error.message);
    },
    //S
    [types.SEARCH_STUDENT_REQUEST](state) {
      state.isLoading = true;
    },
    [types.SEARCH_STUDENT_SUCCESS](state, listStudents) {
      state.isLoading = false, 
      state.error = false;
      state.listStudents = listStudents.listData,
      state.totalPage = listStudents.totalPage,
      state.activePage = listStudents.activePage,
      state.textSearch = listStudents.textSearch
    },
    [types.SEARCH_STUDENT_FAILURE](state, error) {
      state.isLoading = false,
      state.error = true,
      state.message = error.message;
    },
  },

};
export default studentModule;
