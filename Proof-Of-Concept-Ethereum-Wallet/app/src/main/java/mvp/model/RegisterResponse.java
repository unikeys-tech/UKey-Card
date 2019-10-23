package com.softa.softb.mvp.model;

/**
 * Created by ****** on 2/8/18.
 */

public class RegisterResponse {

    /**
     * data : {"phone":"123123123","email":"mail123@123g.com","firstName":"haha","lastName":"hihi","type":2,"created":"2018-02-08T06:51:51.622Z","modified":"2018-02-08T06:51:51.622Z","status":1,"active":true}
     * error : null
     */

    private DataBean data;
    private Object error;

    public DataBean getData() {
        return data;
    }

    public void setData(DataBean data) {
        this.data = data;
    }

    public Object getError() {
        return error;
    }

    public void setError(Object error) {
        this.error = error;
    }

    public static class DataBean {
        /**
         * phone : 123123123
         * email : mail123@123g.com
         * firstName : haha
         * lastName : hihi
         * type : 2
         * created : 2018-02-08T06:51:51.622Z
         * modified : 2018-02-08T06:51:51.622Z
         * status : 1
         * active : true
         */

        private String phone;
        private String email;
        private String firstName;
        private String lastName;
        private int type;
        private String created;
        private String modified;
        private int status;
        private boolean active;

        public String getPhone() {
            return phone;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public int getType() {
            return type;
        }

        public void setType(int type) {
            this.type = type;
        }

        public String getCreated() {
            return created;
        }

        public void setCreated(String created) {
            this.created = created;
        }

        public String getModified() {
            return modified;
        }

        public void setModified(String modified) {
            this.modified = modified;
        }

        public int getStatus() {
            return status;
        }

        public void setStatus(int status) {
            this.status = status;
        }

        public boolean isActive() {
            return active;
        }

        public void setActive(boolean active) {
            this.active = active;
        }
    }
}
