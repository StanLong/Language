public class Employee {
  
    private String id;
    public int age;
    protected String addr;
    boolean sex;
    
    Employee(int age){
        this.age = age;
    }
  
    public boolean login(String name,String  pwd) {
      if("admin".contentEquals(name) && "123".contentEquals(pwd)) {
        return true;
      }
      return false;
    }
    public void logout() {
      System.out.println("系统已经安全退出");
    }
}