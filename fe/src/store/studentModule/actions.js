import * as types from "./types";
import studentAPI from "../../API/studentAPI";

const actions = {
  
  async [types.GET_STUDENT_REQUEST]({ commit }) {
    commit(types.GET_STUDENT_REQUEST);
    try {
      const res = await studentAPI(types.HTTP_READ, "", "");
      commit(types.GET_STUDENT_SUCCESS, res.getData);
    } catch (error) {
      commit(types.GET_STUDENT_FAILURE, error);
    }
  },

  async [types.ADD_STUDENT_REQUEST]({ commit, dispatch }, payload) {
    commit(types.ADD_STUDENT_REQUEST);
    try {
      await studentAPI(types.HTTP_CREATE, "", { name: payload.name });

      commit(types.ADD_STUDENT_SUCCESS);

      dispatch(types.PAGINATION_STUDENT_REQUEST, 1);
    } catch (error) {
      commit(types.ADD_STUDENT_FAILURE, error);
    }
  },

  async [types.DELETE_STUDENT_REQUEST]({ commit, dispatch }, payload) {
    commit(types.DELETE_STUDENT_REQUEST);
    try {
      await studentAPI(types.HTTP_DELETE, `/${payload}`, ``);

      commit(types.DELETE_STUDENT_SUCCESS);

      dispatch(types.PAGINATION_STUDENT_REQUEST, 1);
    } catch (error) {
      commit(types.DELETE_STUDENT_FAILURE, error);
    }
  },

  async [types.UPDATE_STUDENT_REQUEST]({ commit, dispatch }, payload) {
    commit(types.UPDATE_STUDENT_REQUEST);
    try {
      await studentAPI(types.HTTP_UPDATE, `/${payload.id}`, {
        name: payload.nameUpdate,
      });

      commit(types.UPDATE_STUDENT_SUCCESS);

      dispatch(types.PAGINATION_STUDENT_REQUEST, 1);
    } catch (error) {
      commit(types.UPDATE_STUDENT_FAILURE, error);
    }
  },

  async [types.PAGINATION_STUDENT_REQUEST](context, payload) {
    context.commit(types.PAGINATION_STUDENT_REQUEST);
    try {
      const res = await studentAPI(
        types.HTTP_READ, `/pagination?activePage=${payload}&limit=${types.LIMIT}`, "" );
      setTimeout(() => {
        context.commit(types.PAGINATION_STUDENT_SUCCESS, {
          listData: res.pagination,
          totalPage: res.totalPage,
          activePage: payload,
        });
      }, 1000);


    } catch (error) {
      context.commit(types.PAGINATION_STUDENT_FAILURE, error);
    }
  },

  async [types.SEARCH_STUDENT_REQUEST]({ commit }, payload) {
    commit(types.SEARCH_STUDENT_REQUEST);
    try {
      const res = await studentAPI(
        types.HTTP_READ,
        `/search?activePage=${payload.activePage}&limit=${types.LIMIT}&textSearch=${payload.textSearch}`,
        ""
      );
      // setTimeout(() => {
      //   console.log("dang tim kiem");
      // }, 1000);
      commit(types.SEARCH_STUDENT_SUCCESS, {
        listData: res.listData,
        totalPage: res.totalPage,
        activePage: payload.activePage,
        textSearch: payload.textSearch,
      });
    } catch (error) {
      commit(types.SEARCH_STUDENT_FAILURE, error);
    }
  },
};

export default actions;
