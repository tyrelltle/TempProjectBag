using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using shaotianchatroom.App_Code.BLL;
using shaotianchatroom.User_Controls;
using System.Drawing;
namespace shaotianchatroom
{
    public partial class FriendCalendar : System.Web.UI.Page
    {
        private Profile_BLL profile_context;
        Calendar_BLL calendarcontext = new Calendar_BLL();
        protected void Page_Load(object sender, EventArgs e)
        {
            ((System.Web.UI.WebControls.Image)this.loginview.FindControl("userimg")).ImageUrl = "../handler1.ashx?id=" + (Guid)Session["selectedfriend_id"];

            if (!IsPostBack)
            {
                profile_context = new Profile_BLL(Server);
                Profile_Wraper profilewrap = profile_context.get((Guid)Session["selectedfriend_id"]);
                ((System.Web.UI.WebControls.Image)this.loginview.FindControl("userimg")).ImageUrl = "../handler1.ashx?id=" + profilewrap.Id;
                if (profilewrap.extendProfile.name != null)
                    ((Label)this.loginview.FindControl("name")).Text = profilewrap.extendProfile.name;
                if (profilewrap.extendProfile.sex != null)
                    ((Label)this.loginview.FindControl("sex")).Text = profilewrap.extendProfile.sex;
                if (profilewrap.Email != null)
                    ((Label)this.loginview.FindControl("email")).Text = profilewrap.Email;
                if (profilewrap.extendProfile.Favorate != null)
                    ((Label)this.loginview.FindControl("favor")).Text = profilewrap.extendProfile.Favorate;
                if (profilewrap.extendProfile.Dislike != null)
                    ((Label)this.loginview.FindControl("dislike")).Text = profilewrap.extendProfile.Dislike;
                ViewState["cont_visible"] = false;
                Cache["CalendarEvent2"] = calendarcontext.getEventByUserId((Guid)Session["selectedfriend_id"]);
       
            }

            //if (((Calendar)loginview.FindControl("mycalendar")).SelectedDate != null)
            //    mycalsel();
            setwall();
            
        }
        protected void calDayRender(Object source, DayRenderEventArgs e)
        {
            IEnumerable<calendar_event> var = ((IEnumerable<calendar_event>)Cache["CalendarEvent2"]).Where(i => i.createtime == e.Day.Date);
            if (var.Count() > 0)
            {
                e.Cell.BackColor = Color.YellowGreen;
                e.Cell.ForeColor = Color.White;
            }
        }
        protected void setwall()
        {
            ((Wall)this.loginview.FindControl("Wall1")).Owner = (Guid)Session["selectedfriend_id"];
            // this.loginview.Controls.Add(neww);
            //  ((Wall)this.loginview.FindControl("Wall1")).Owner = 
        }
        protected void loginaction()
        {
                      
           // DataClasses1DataContext db=new DataClasses1DataContext();
           // IEnumerable<string> mat;
           // mat = from i in db.aspnet_Users
           //       select i.UserName;
           // GridView gvv = (GridView)this.loginview.FindControl("gv");

         
           // gvv.DataSource = mat;
           // gvv.DataBind();
           //// Calendar c = new Calendar();
           // //c.VisibleDate.
     
        }
        //protected void addone(object sender, EventArgs e)
        //{
        //    ((Panel)this.loginview.FindControl("container")).Visible = true;
        //    ViewState["cont_visible"] = true;
        //}

        //protected void bt_nonewe(object sender, EventArgs e)
        //{
        //    ((Panel)this.loginview.FindControl("container")).Visible = false;
        //    ViewState["cont_visible"] = false;
        //}
        protected void mycalsel()
        {
            
            Calendar mycal=(Calendar)loginview.FindControl("mycalendar");
            DateTime date = mycal.SelectedDate;
            calendar_entity db = new calendar_entity();
            string unm = (string)Session["selectedfriend_name"];// Membership.GetUser().UserName;
            IEnumerable<calendar_event> evt = calendarcontext.getEvent(unm, date);
                //(from i in db.calendar_event
                //       let uid = (from j in db.aspnet_Users
                //                  where j.UserName == unm orderby i.createtime
                //                  select j.UserId).FirstOrDefault()
                //       where uid == i.UserId && i.createtime==date
                //       select i);
           
            
            //((GridView)loginview.FindControl("gv")).DataSource = evt;
            //((GridView)loginview.FindControl("gv")).DataBind();
            string txt="";
            for (int i = 0; i < evt.Count(); i++)
            {
                txt += "<div style='background-color:#81aa32'><a style='color:white' href='eventroom.aspx?eventid=" + evt.ElementAt(i).eventid + "&tittle=" + evt.ElementAt(i).tittle + "&event=" +
                         Server.UrlEncode(evt.ElementAt(i).content) + "&username=" + Membership.GetUser().UserName +
                         "&date=" + date + "&place=" + evt.ElementAt(i).place + "'>" + evt.ElementAt(i).tittle + "</a><br/></div><br/>";
            }
            ((Literal)loginview.FindControl("Literal1")).Text = txt;
          //  Response.Redirect("eventroom.aspx?event="+Server.UrlEncode(txt));

           
        }
        //protected void bt_newEvent(object sender, EventArgs e)
        //{((Panel)this.loginview.FindControl("container")).Visible = false;
        //    ViewState["cont_visible"] = false;
        //    calendar_entity db = new calendar_entity();
        //    string unm = Membership.GetUser().UserName;
        //    Guid uid = (from user in db.aspnet_Users
        //              where user.UserName == unm
        //              select user.UserId).Single();



          
        //    calendar_event newe = new calendar_event()
        //    {
        //        UserId = uid,
        //        eventid = Guid.NewGuid(),
        //        content = ((TextBox)this.loginview.FindControl("TextBox1")).Text,
        //        createtime = ((Calendar)this.loginview.FindControl("mycalendar")).SelectedDate
        //    };

        //    db.calendar_event.AddObject(newe);
        //    db.SaveChanges();

           
        //}

      
    }
}