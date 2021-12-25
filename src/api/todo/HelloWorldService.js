import axios from "axios";


class HelloWorldService{
    executeHelloWorldService(){

        return axios.get('http://localhost:8080/hello-world');

        //console.log('executeHelloWorldService');
    }

    executeHelloWorldBeanService(){

        return axios.get('http://localhost:8080/hello-world-bean');

        //console.log('executeHelloWorldService');
    }

    
    executeHelloWorldPathVariableService(name){

        // let username = 'iamsuryakant';
        // let password = 'dummy';

       // let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);


        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // ,
        //     {
        //         headers: {
        //           authorization: basicAuthHeader
        //         }
        //     }
            
        );

        //console.log('executeHelloWorldService');
    }
}

export default new HelloWorldService();