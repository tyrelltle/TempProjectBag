<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="chatroom.aspx.cs" Inherits="shaotianchatroom.chatroom" ViewStateMode="Enabled" %>


<%@ Register src="User_Controls/TimeSelector.ascx" tagname="TimeSelector" tagprefix="uc1" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

</head>
<body>
    
 
    <form id="form1" runat="server">
    
    
  <%--  <img src="../handler1.ashx" />--%>
   
    <uc1:TimeSelector ID="TimeSelector1" runat="server" />
    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="Button" />
   
    </form>
</body>
</html>
