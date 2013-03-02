<%@ Page Language="C#" AutoEventWireup="true" Theme="Theme1" MasterPageFile="~/Site.Master" CodeBehind="Friends.aspx.cs" Inherits="shaotianchatroom.AddFriend" %>
<%@ Register tagPrefix="mycal" TagName="addFriend" Src="~/User_Controls/AddFriend.ascx" %>
<%@ Register TagPrefix="mycal" TagName="FriendHover" Src="~/User_Controls/FriendHover.ascx" %>
<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">


 
    <mycal:addFriend id="addf" ViewStateMode="Enabled" runat="server"></mycal:addFriend>
  <%--  <mycal:FriendHover id="aa" ViewStateMode="Enabled" runat="server"></mycal:FriendHover>
--%>
    



</asp:Content>
