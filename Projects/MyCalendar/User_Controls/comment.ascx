<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="comment.ascx.cs" Inherits="shaotianchatroom.User_Controls.comment" %>
<style type="text/css">
    .style4
    {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
    .style5
    {
        font-weight: bold;
        font-style: italic;
    }
    .style6
    {
        font-size: 28px;
        font-family: Arial, Helvetica, sans-serif;
        color: #66FF66;
    }
    .style7
    {
        font-family: Arial, Helvetica, sans-serif;
        color: #66FF66;
        text-decoration: underline;
    }
</style>
<asp:Panel ID="Panel1" Width="500px" BorderColor="#b8b6b6" BorderStyle="Solid" runat="server">
    <div style=" background-color:#b8b6b6; color:White; width:500px; height: 40px;">
      <p style="font-size:20px"><span class="style5"><span class="style7">
          <asp:Literal ID="Literal2" runat="server"></asp:Literal></span><span 
              class="style6"> </span></span>
          <span class="style4">&nbsp;said at 
              <asp:Literal ID="Literal3" runat="server"></asp:Literal> </span></p>
        <p style="font-size:20px">
            &nbsp;</p>
        <p style="font-size:20px">
            &nbsp;</p>
        <p style="font-size:20px">
            &nbsp;</p>
    </div>

    <asp:Literal ID="Literal1" runat="server"></asp:Literal>
    
  <br />


</asp:Panel>
<p>
    &nbsp;</p>
<p>
    &nbsp;</p>

