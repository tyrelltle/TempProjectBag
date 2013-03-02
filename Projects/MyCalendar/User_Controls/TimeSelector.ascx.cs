using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace shaotianchatroom.User_Controls
{
    public partial class TimeSelector : System.Web.UI.UserControl
    {
        private int hour;
        private int minute;

        public int Hour
        { get { if(this.DropDownList1.SelectedIndex==-1)
                     return 0; 
                else return this.DropDownList1.SelectedIndex;
                 }
        }

        public int Minute
        {
            get
            {
                if (this.DropDownList2.SelectedIndex == -1)
                    return 0;
                else return this.DropDownList2.SelectedIndex;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                hour = minute = 0;
                List<int> a = new List<int>();
                for (int i = 0; i < 24; i++)
                {
                    a.Add(i);
                }

                this.DropDownList1.DataSource = a;
                this.DropDownList1.DataBind();

                List<int> b = new List<int>();
                for (int i = 0; i < 60; i++)
                {
                    b.Add(i);
                }

                this.DropDownList2.DataSource = b;
                this.DropDownList2.DataBind();
            
            }
        }
    }
}