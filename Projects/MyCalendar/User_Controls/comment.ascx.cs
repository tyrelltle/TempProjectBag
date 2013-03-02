using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace shaotianchatroom.User_Controls
{
    public partial class comment : System.Web.UI.UserControl
    {
        private string users;
        private string contents;
        private DateTime time;

        public DateTime Time
        {
            get { return time; }
            set { time = value; }
        }
        public string Users
        {
            get { return users; }
            set { users = value; }
        }

        public string Contents
        {
            get { return contents; }
            set { contents = value; }

        }

        
        protected void Page_Load(object sender, EventArgs e)
        {
            this.Literal1.Text = contents;
            this.Literal2.Text = users;
            this.Literal3.Text = time.ToString();
        }


    }
}