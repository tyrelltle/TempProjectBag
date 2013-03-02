<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Site.Master" CodeBehind="eventroom.aspx.cs" Inherits="shaotianchatroom.eventroom" %>



<%@ Register src="User_Controls/joinevent.ascx" tagname="joinevent" tagprefix="uc1" %>



<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">



 <%loadmsg(); %>










   
   

  
<div><strong>Event Tittle:</strong> <%=Request.QueryString["tittle"] %>    </div>
<div><strong>
    <br />
    created by:</strong> <%=Request.QueryString["username"] %> </div>
<div><strong>
    <br />
    Start:  
    <asp:Literal ID="start" runat="server"></asp:Literal></strong></div>
<div><strong>
    <br />
    End:  
    <asp:Literal ID="end" runat="server"></asp:Literal></strong></div>
<div><strong>
    <br />
    Place :</strong> <%=Request.QueryString["place"] %></div>
<div><strong>
    <br />
    Comment:</strong></div>
<div><%=getcomment() %></div>
    <asp:PlaceHolder ID="PlaceHolder_join" runat="server"></asp:PlaceHolder>
<br />
<div>   
    <asp:TextBox TextMode="MultiLine" ID="TextBox1" runat="server" 
        Height="81px" Width="520px"></asp:TextBox>
    <asp:Button ID="Button1" runat="server" Text="Submit" onclick="Button1_Click" />
    <br />
    <br />
    <br />
</div>
   
    <br />

<asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
          <div>
         <asp:Literal ID="Literal1" EnableViewState="true" runat="server"></asp:Literal> 
         <asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
         </div>
    
    </ContentTemplate>


</asp:UpdatePanel>

</asp:Content>
