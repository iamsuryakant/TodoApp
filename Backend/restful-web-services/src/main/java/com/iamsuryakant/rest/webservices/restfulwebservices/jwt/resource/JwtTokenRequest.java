package com.iamsuryakant.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpYW1zdXJ5YWthbnQiLCJleHAiOjE2NDEwMTI0MDMsImlhdCI6MTY0MDQwNzYwM30.16RD_5_ApTQpzLsX35APDrVNhiLmwvRUY_aGPp7ciHNNBcOpDEWiNIHRrwZcV8P7toJxGhpc_Wwk2SXK4XVcBg"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

