using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using shaotianchatroom.Utilities;
using System.Drawing;
using shaotianchatroom.App_Code.BLL;
using shaotianchatroom.App_Code.DAL;
namespace shaotianchatroom.User_Controls
{
    public partial class joinevent : System.Web.UI.UserControl
    {
        private calendar_entity db = new calendar_entity();
        private GlobalEvent_BLL globalevent_context = new GlobalEvent_BLL(new calendar_entity());
 
        private Guid myid;//the user id of the event creater
        public Guid Myid
        { 
            get { return myid; }
            set { myid = value; }
        }
        private Guid visiterid;//the user id of the visiter
        public Guid Visiterid
        {
            get { return visiterid; }
            set { visiterid = value; }
        }

        private Guid eventid; 
        public Guid Eventid
        {
            get { return eventid; }
            set { eventid = value; }
        }


        protected void Page_Load(object sender, EventArgs e)
        {
            showbutton();

            displayJoiners();

           
        }

        public void showbutton()
        { //determine if the button used to join event should be displayed
            bool enableJoinButton = false;
            
            if(myid.Equals(visiterid))//creater of event cant joint his/her own event!
                enableJoinButton = false;
            else
                enableJoinButton = true;

            IEnumerable<calendar_joinevent> var = from i in db.calendar_joinevent
                                                  where i.UserId == visiterid &&i.eventid==eventid
                                                  select i;
            if (enableJoinButton&&var.Count() == 0)
                enableJoinButton = true;
            else
                enableJoinButton = false;
            this.Button1.Visible = enableJoinButton;
        }

        public void displayJoiners()
        { //display all the joiners of this event
            IEnumerable<withid> joiners =( from i in db.calendar_joinevent
                                          join j in db.aspnet_Users
                                          on i.UserId equals j.UserId
                                          where i.eventid == eventid
                                          select new withid
                                          {
                                              Friend = j.UserName,
                                              id = j.UserId
                                          });
            joinlist.Controls.Clear();
           foreach (withid i in joiners)
           {
               withid inner = i;
               Button newb = new Button();
               newb.BackColor = Color.White;
               newb.ForeColor = Color.Green;
               newb.BorderStyle = BorderStyle.None;
               newb.Text = i.Friend;
               newb.ID = i.Friend;
               
               newb.Click+=new EventHandler(delegate(object sender,EventArgs e){

                   Utilities.Utilities.redirectToFriendHome( Session, Response,
                                                            i.id, i.Friend);
               });
                this.joinlist.Controls.Add(newb);
               
        
           }
              // ret += "<a href=\"\">" + i + "</a>&nbsp;&nbsp;";
           

        //   this.joinlist.Text = ret;
               
        
        }

      

        protected void Button1_Click(object sender, EventArgs e)
        {
            calendar_joinevent newjoin = new calendar_joinevent();
            newjoin.eventid = this.eventid;
            newjoin.UserId = this.visiterid;
            db.calendar_joinevent.AddObject(newjoin);
            db.SaveChanges();
            Button1.Visible = false;

            calendar_globalevent newg = new calendar_globalevent();
            newg.eventtype = "joinevent";
            newg.userid = this.visiterid;
            newg.createtime = DateTime.Today;
            calendar_event evt = (Calendar_DAL.getEventById(eventid)).First();
            this.globalevent_context.insertevent(newg, this.Page, evt);

        }

    }
}