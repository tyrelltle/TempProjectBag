﻿<%@ Page Title="Home Page" Theme="Theme1"  Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs" Inherits="shaotianchatroom._Default" ValidateRequest="false" ViewStateMode="Enabled" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<%@ Register src="User_Controls/Wall.ascx" tagname="Wall" tagprefix="uc1" %>
<%@ Register src="~/User_Controls/TimeSelector.ascx" tagname="timesel" tagprefix="uc1" %>
<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">



    <h2>
        Welcome to My Calendar! Share your daily events with friends!
    </h2>
    <p>
     <asp:LoginView ID="loginview" runat="server">
        <AnonymousTemplate>
      
           <h2>Here is a wonderful world! <br />
               Do you want to join us?<br />
               Simply click "Log In" link on the upper right coner!</h2>
        
        
        </AnonymousTemplate>


        <LoggedInTemplate>
    
       <%if ((bool)ViewState["selected"])
             listevent(); %>
            Welcome! <%=Membership.GetUser().UserName %><br />
            Please select your event
            <%loginaction(); %>
            <div>
                    <div  style="float:left">
                        <asp:Calendar ID="mycalendar" OnDayRender="calDayRender" OnSelectionChanged="mycalsel"  runat="server"></asp:Calendar>
                        <asp:Button ID="add" Enabled="false" runat="server" Text="Add at selected date" OnClick="addone"  />
                        <asp:Literal ID="Literal1" runat="server" EnableViewState="true"></asp:Literal>
                           <asp:GridView ID="gv" AutoGenerateDeleteButton="true" OnRowDeleting="gvdelete" AutoGenerateSelectButton="true" ForeColor="#81aa32" BorderWidth="0px" OnSelectedIndexChanging="gvselect" Width="50px" runat="server"></asp:GridView>
                    </div>  
                    
                    <div style="float:right">
                    <div>
                        <asp:Image ID="userimg" SkinId="smalluserimg" runat="server" />
                        <br />
                        <%=Membership.GetUser().UserName %><br />

                        <table border="0">
                        <tr>
                            <td><span class="profileItem"> Full Name:</span></td>
                            <td><asp:Label ID="name" runat="server" Text="not specified"></asp:Label></td>
                        </tr> 
                        <tr>
                            <td><span class="profileItem">Sex:</span></td>
                            <td><asp:Label ID="sex" runat="server" Text="not specified"></asp:Label></td>
                        </tr>
                        
                        <tr>
                            <td><span class="profileItem"> Email:</span></td>
                            <td><asp:Label ID="email" runat="server" Text="not specified"></asp:Label></td>
                        </tr>
                        
                        <tr>
                            <td><span class="profileItem"> Favorates:</span></td>
                            <td><asp:Label ID="favor" runat="server" Text="not specified"></asp:Label></td>
                        </tr>
                        <tr>
                            <td><span class="profileItem"> Dislikes:</span></td>
                            <td><asp:Label ID="dislike" runat="server" Text="not specified"></asp:Label></td>
                        </tr>
                        </table>
                        <br />
                        <uc1:Wall ID="Wall1" runat="server" />
                         
                         
                    </div>
                    </div>

            </div>      
            

            <asp:DragPanelExtender ID="DragPanelExtender1"  DragHandleID="head" TargetControlID="container" runat="server">
            </asp:DragPanelExtender>

            <asp:Panel ID="container" Visible="false" SkinID="container" BackColor="#7fa040" ForeColor="White" runat="server">
                <asp:Panel ID="head" SkinID="head" runat="server">
                    
                    Add an event at <%=((Calendar)this.loginview.FindControl("mycalendar")).SelectedDate.ToString() %>
                    
                 </asp:Panel>  
                  
                        <asp:Label ID="tittlee" Text="enter tittle of your event" runat="server"></asp:Label><br />
                        <asp:TextBox ID="tittle" Text="" runat="server"></asp:TextBox><br />
                        <br /><br />

                        <asp:Label ID="Label1" Text="enter content of your event" runat="server"></asp:Label><br />
                        <asp:TextBox ID="TextBox1" Text="" TextMode="MultiLine" runat="server"></asp:TextBox><br />
                        <br /><br />
                         <asp:Label ID="Label2" Text="enter place of your event" runat="server"></asp:Label><br />
                        <asp:TextBox ID="TextBox2" Text="" runat="server"></asp:TextBox><br />


                        <asp:Label ID="Label3" Text="Start Time:" runat="server"></asp:Label><br />
                        <uc1:timesel runat="server" ID="startTimeSel" /><br />

                        <asp:Label ID="Label4" Text="End Time:" runat="server"></asp:Label><br />
                        <uc1:timesel runat="server" ID="endTimeSel" /><br />


                        <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="bt_newEvent" />
                        <asp:Button ID="Button2" runat="server" Text="Cancel" OnClick="bt_nonewe" />
                         <br />
                         <br />
                         <br />
            </asp:Panel>
            
           
            <script type="text/javascript">
                function setBodyHeightToContentHeight() {
                    document.body.style.height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) + "px";
                }

                setBodyHeightToContentHeight();

                // Uncomment the line below if you are having problem while resizing the browser window.
                // window.attachEvent('onresize', setBodyHeightToContentHeight);
            </script>
        </LoggedInTemplate>
     
     
     </asp:LoginView>
      
       
    </p>
    </asp:Content>
