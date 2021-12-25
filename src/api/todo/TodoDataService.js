import axios from "axios";
import { JPA_API_URL } from "../../Constants";


class TodoDataService{

     retriveAllTodos(name){

        return axios.get(`${JPA_API_URL}/user/${name}/todos`);
        //console.log('executeHelloWorldService');
    }

    retrieveTodo(name, id){

        return axios.get(`${JPA_API_URL}/user/${name}/todos/${id}`);
        //console.log('executeHelloWorldService');
    }

    deleteTodo(name, id){

        return axios.delete(`${JPA_API_URL}/user/${name}/todos/${id}`);
        //console.log('executeHelloWorldService');
    }


    updateTodo(name, id, todo){

        return axios.put(`${JPA_API_URL}/user/${name}/todos/${id}`, todo);
        //console.log('executeHelloWorldService');
    }

    createTodo(name, todo){

        return axios.post(`${JPA_API_URL}/user/${name}/todos`, todo);
        //console.log('executeHelloWorldService');
    }






}

export default new TodoDataService();