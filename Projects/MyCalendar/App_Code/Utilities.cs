using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using System.Web.SessionState;

namespace shaotianchatroom.Utilities
{
    public class Utilities
    {

       

        public static void redirectToFriendHome(HttpSessionState Session, HttpResponse Response, Guid selectedfriend_id, string selectedfriend_name)
        {
            calendar_entity db = new calendar_entity();

            IEnumerable<withid> searchRes = (IEnumerable<withid>)Session["friendlist"];
            Session["selectedfriend_id"] = selectedfriend_id;
            Session["selectedfriend_name"] = selectedfriend_name;
            Response.Redirect("FriendCalendar.aspx");
        }
        
        public static void alert(string str)
         {
            System.Web.HttpContext.Current.Response.Write("<SCRIPT LANGUAGE=\"JavaScript\">alert(\""+str+"Hello this is an Alert\")</SCRIPT>");

         }

        public static Guid getUserIdByName(string name)
        { calendar_entity db = new calendar_entity();

        return (from i in db.aspnet_Users
                where i.UserName == name
                select i.UserId).First();
        
        }

        public static string wrapstring(string oristr, int colums)
        {
            if (colums <= 0)
                return oristr;
          
            string str = oristr;
            int c = 0;
            while (c + colums < str.Length)
            {
                str = str.Insert(c + colums, "<br/>");
                c += 5;
                c += colums;
            }
            return str;

        }

    }


    public interface QueueType
    {
        

    }
    public class FixedQueue
    { 
        private int len;
        private List<QueueType> items;
        
        public QueueType getItem(int i)
        {
            return items.ElementAt(i);
        }

        public void insert(QueueType item)
        {
            items.Insert(0, item);
            if (items.Count() > len)
            {
                items.RemoveAt(items.Count() - 1);
            }
        }
        
        public int Len
        { get { return len; }
            set { len = value; }
        }


        public FixedQueue(int len)
        {
            this.items = new List<QueueType>();
            this.len = len;
        }


       
    
    }

    public class SearchFriendParameter
    {//contains parameters needed to search 


    }

    
    public class withid
    {
        public Guid id
        { get; set; }
        public string Friend
        { get; set; }
    }
    public class noid
    {
        public string Friend
        { get; set; }
    }

    

    public class nameidcontent
    {
        public Guid id
        { get; set; }
        public string name
        { get; set; }
        public string content
        { get; set; }
    }


}