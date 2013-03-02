using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using shaotianchatroom.App_Code.BLL;
using shaotianchatroom.Utilities;
namespace shaotianchatroom
{
    public partial class eventroom : System.Web.UI.Page
    {
        EventComment_BLL eventcontex = new EventComment_BLL();
        Calendar_BLL calendarcontex = new Calendar_BLL();
        protected void Page_Load(object sender, EventArgs e)
        {
            this.loadmsg();
            this.loadjoinlist();
            DateTime st=Calendar_BLL.getStart(Guid.Parse( Request.QueryString["eventid"]));
            DateTime ed=Calendar_BLL.getEnd(Guid.Parse( Request.QueryString["eventid"]));
            start.Text = st.Hour + " hour: " + st.Minute + " minute";
            end.Text = ed.Hour + " hour: " + ed.Minute + " minute";
        }

        public string getcomment()
        {

            return Utilities.Utilities.wrapstring(Request.QueryString["event"], 30);
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            calendar_entity db = new calendar_entity();
            Guid evtid = new Guid(Request.QueryString["eventid"]);
            eventcontex.insertComment(Membership.GetUser().UserName,
                                      evtid,
                                      this.TextBox1.Text);

        }

        private void loadjoinlist()
        {
            User_Controls.joinevent joinevent1 = (User_Controls.joinevent)Page.LoadControl("User_Controls/joinevent.ascx");
           
            calendar_entity db = new calendar_entity();
            Guid newg=new Guid(Request.QueryString["eventid"]);//temporarily holds the event id. newg means "new guid holder"
            joinevent1.Eventid = newg;

            joinevent1.Visiterid = (Guid)Membership.GetUser().ProviderUserKey;

            Guid ownerid = calendarcontex.getEventByIdReternUserId(newg); 
            //(from i in db.calendar_event
            //               where i.eventid == newg
            //               select i.UserId).First();
            joinevent1.Myid = ownerid;
            this.PlaceHolder_join.Controls.Add(joinevent1);

             
        }
        protected void loadmsg(object sender, EventArgs e)
        {
            loadmsg();
        }
        protected void loadmsg()
        {
 
            calendar_entity db = new calendar_entity();
           
            Guid eventid = new Guid(Request.QueryString["eventid"]);

            IEnumerable<calendar_message> evt = eventcontex.getComment(eventid);
            
            //(from i in db.calendar_message

            //                                     where i.eventid == eventid
            //                                     orderby i.createtime descending
            //                                     select i);
            string bluestyle = "\"bluechatbar\"";
            string greenstyle = "\"greenchatbar\"";
            string res = "";
            PlaceHolder1.Controls.Clear();
            if (evt != null && evt.Count() > 0)
            {

                bool flag = false;
                for (int i = 0; i < evt.Count(); i++)
                {
                    //flag = !flag;
                    //if (!flag)
                    //    res += "<div class=" + bluestyle + ">" + evt.ElementAt(i).UserName + "said:  " + evt.ElementAt(i).content + "----At " + evt.ElementAt(i).createtime + "</div><br/><br/>";
                    //else
                    //    res += "<div class=" + greenstyle + ">" + evt.ElementAt(i).UserName + "said:  " + evt.ElementAt(i).content + "----At " + evt.ElementAt(i).createtime + "</div><br/><br/>";

                    User_Controls.comment c = (User_Controls.comment)Page.LoadControl("User_Controls/comment.ascx");
                    c.Users = evt.ElementAt(i).UserName;
                    c.Contents = evt.ElementAt(i).content;
                    c.Time = evt.ElementAt(i).createtime;
                    PlaceHolder1.Controls.Add(c);
                }


                this.Literal1.Text = res;

            }
            else

                this.Literal1.Text = "No message";
        }
    }
}