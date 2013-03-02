using System;
using System.Collections.Generic;
using System.Linq;

using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using shaotianchatroom;
using shaotianchatroom.App_Code.BLL;
using shaotianchatroom.User_Controls;
using System.Drawing;
namespace shaotianchatroom
{
    public partial class _Default : System.Web.UI.Page
    {
        private Calendar_BLL calendarContext=new Calendar_BLL();
        private GlobalEvent_BLL globalevent_context = new GlobalEvent_BLL(new calendar_entity());
        private Profile_BLL profile_context;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Membership.GetUser() != null)
            {
                profile_context = new Profile_BLL(Server);
                Profile_Wraper profilewrap = profile_context.get((Guid) Membership.GetUser().ProviderUserKey);
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

                if (IsPostBack)
                {
                    ((Panel)this.loginview.FindControl("container")).Visible = (Boolean)ViewState["cont_visible"];

                    //    ((Wall)this.loginview.FindControl("Wall1")).Owner = (Guid)Membership.GetUser().ProviderUserKey;
                }
                else
                {
                    ViewState["cont_visible"] = false;
                    ViewState["selected"] = false;
                    Cache["CalendarEvent"] = calendarContext.getEventByUserId((Guid)Membership.GetUser().ProviderUserKey);
                }

               // if (Membership.GetUser() != null)
                    setwall();
            }

        }

        protected void calDayRender(Object source, DayRenderEventArgs e)
        { 
            IEnumerable<calendar_event> var=((IEnumerable<calendar_event>)Cache["CalendarEvent"]).Where(i=>i.createtime==e.Day.Date);
            if (var.Count() > 0)
            {
                e.Cell.BackColor = Color.YellowGreen;
                e.Cell.ForeColor = Color.White;
            }
        }
        protected void setwall()
        {
           ((Wall) this.loginview.FindControl("Wall1")).Owner=(Guid)Membership.GetUser().ProviderUserKey;
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
        protected void addone(object sender, EventArgs e)
        {
            
                ((Panel)this.loginview.FindControl("container")).Visible = true;
                ViewState["cont_visible"] = true;
            

        }

        protected void bt_nonewe(object sender, EventArgs e)
        {
            ((Panel)this.loginview.FindControl("container")).Visible = false;
            ViewState["cont_visible"] = false;
        }


        public void listevent()
        { 
            Calendar mycal=(Calendar)loginview.FindControl("mycalendar");
            DateTime date = mycal.SelectedDate;
            calendar_entity db = new calendar_entity();
            string unm = Membership.GetUser().UserName;
            IEnumerable<calendar_event> evt = calendarContext.getEvent(unm, date);




            List<string> tmp = new List<string>();
            string txt="";
            for (int i = 0; i < evt.Count(); i++)
            {
                if(evt.ElementAt(i).tittle!=null)
                tmp.Insert(tmp.Count(), evt.ElementAt(i).tittle);
              
            }
            Session["list"] = evt;
            if ((GridView)loginview.FindControl("gv") != null)
            {
                ((GridView)loginview.FindControl("gv")).DataSource = tmp;

                ((GridView)loginview.FindControl("gv")).DataBind();
            }
          //  Response.Redirect("eventroom.aspx?event="+Server.UrlEncode(txt));
        
        }


        protected void gvdelete(object sender, GridViewDeleteEventArgs e)
        {
            IEnumerable<calendar_event> evt = (IEnumerable<calendar_event>)Session["list"];
            int index = e.RowIndex;
            calendarContext.deleteEvent(evt.ElementAt(index).eventid);
          
        }

        protected void gvselect(object sender, GridViewSelectEventArgs e)
        {
            IEnumerable<calendar_event> evt = (IEnumerable<calendar_event>)Session["list"];
            int i = e.NewSelectedIndex;
            Calendar mycal = (Calendar)loginview.FindControl("mycalendar");
            DateTime date = mycal.SelectedDate;
            Response.Redirect("eventroom.aspx?eventid=" + evt.ElementAt(i).eventid + "&tittle=" + evt.ElementAt(i).tittle + "&event=" +
                        Server.UrlEncode(evt.ElementAt(i).content) + "&username=" + Membership.GetUser().UserName +
                        "&date=" + date + "&place=" + evt.ElementAt(i).place);
         
        }
        protected void mycalsel(object sender, EventArgs e)
        {
            ViewState["selected"] = true;
            ((Button)this.loginview.FindControl("add")).Enabled = true;
            listevent();
            

           
        }
        protected void bt_newEvent(object sender, EventArgs e)
        {((Panel)this.loginview.FindControl("container")).Visible = false;
            ViewState["cont_visible"] = false;
            calendar_entity db = new calendar_entity();
            string unm = Membership.GetUser().UserName;
            Guid uid = (from user in db.aspnet_Users
                      where user.UserName == unm
                      select user.UserId).Single();

            DateTime start = ((Calendar)this.loginview.FindControl("mycalendar")).SelectedDate;
            DateTime end = ((Calendar)this.loginview.FindControl("mycalendar")).SelectedDate;
            start=start.AddHours( ((TimeSelector)this.loginview.FindControl("startTimeSel")).Hour);
            start=start.AddMinutes( ((TimeSelector)this.loginview.FindControl("startTimeSel")).Minute);

            end = end.AddHours(((TimeSelector)this.loginview.FindControl("endTimeSel")).Hour);
            end = end.AddMinutes(((TimeSelector)this.loginview.FindControl("endTimeSel")).Minute);



           calendar_event evt= calendarContext.insertEvent(uid,
                                         Guid.NewGuid(),
                                         ((TextBox)this.loginview.FindControl("tittle")).Text,
                                         ((TextBox)this.loginview.FindControl("TextBox1")).Text,
                                         ((TextBox)this.loginview.FindControl("TextBox2")).Text,
                                        ((Calendar)this.loginview.FindControl("mycalendar")).SelectedDate,
                                         start,
                                         end);


            calendar_globalevent newge=new calendar_globalevent(){ userid=uid, eventtype="addedcalevent", createtime=DateTime.Today};
           this.globalevent_context.insertevent(newge,this.Page,evt);
            //calendar_event newe = new calendar_event()
            //{
               
            //    UserId = uid,
            //    eventid = Guid.NewGuid(),
            //    content = ((TextBox)this.loginview.FindControl("TextBox1")).Text,
            //    place = ((TextBox)this.loginview.FindControl("TextBox2")).Text,
            //    createtime = ((Calendar)this.loginview.FindControl("mycalendar")).SelectedDate
            //};

            //db.calendar_event.AddObject(newe);
            //db.SaveChanges();

           
        }

      
    }
}
