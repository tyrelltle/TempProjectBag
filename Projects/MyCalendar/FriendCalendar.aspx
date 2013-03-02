<%@ Page Language="C#" AutoEventWireup="true" Theme="Theme1" MasterPageFile="~/Site.Master" CodeBehind="FriendCalendar.aspx.cs" Inherits="shaotianchatroom.FriendCalendar" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<%@ Register src="User_Controls/Wall.ascx" tagname="Wall" tagprefix="uc1" %>
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
        <%mycalsel(); %>
           <%=(string) Session["selectedfriend_name"] %> 's calendar<br />
            Please select event
            <%loginaction(); %>
            <div>
                    <div  style="float:left">
                        <asp:Calendar ID="mycalendar" OnDayRender="calDayRender"  runat="server"></asp:Calendar>
              
                        <asp:Literal ID="Literal1" runat="server" EnableViewState="true"></asp:Literal>
                         <asp:GridView ID="gv" runat="server"></asp:GridView>   
                    </div>  
                    
                    <div style="float:right">
                    <div><asp:Image ID="userimg" SkinId="smalluserimg" runat="server" />
                        <br />
                        <%=(string)Session["selectedfriend_name"]%><br />

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
            


            


           
        </LoggedInTemplate>
     
     
     </asp:LoginView>
      
       
    </p>
    </asp:Content>
