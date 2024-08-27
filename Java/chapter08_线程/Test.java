/*
    定时器
    每隔一段固定的时间执行一段代码
*/

import java.io.*;
import java.text.*;
import java.util.*;
public class Test{
    
    public static void main(String[] args) throws Exception{
        Timer t = new Timer();
        
        t.schedule(new LogTimerTask(){}, // 指定定时任务
                    new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS").parse("2021-07-25 19:50:00 000"),  // 时间
                    10*1000 // 间隔时间
                   );
        
    }
}

// 指定定时任务
class LogTimerTask extends TimerTask{
    public void run(){
        System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS").format(new Date()));
    }
}