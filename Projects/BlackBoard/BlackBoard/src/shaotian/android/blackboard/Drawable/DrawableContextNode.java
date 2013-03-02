package shaotian.android.blackboard.Drawable;

import java.util.UUID;

import android.graphics.Paint;


public class DrawableContextNode {
	public 	android.graphics.Point coordinate;
	public Paint paint;
	public UUID id;
	public int action;
	public int picture;
	public int width;
	public int height;
	public String text;
	public DrawableContextNode(	int picture,android.graphics.Point coor,Paint paint,UUID id,int  action)
	{
		this.coordinate=coor;
		this.id=id;
		this.paint=paint;
		this.action=action;
		this.picture=picture;
		this.width=this.height=0;
		this.text=null;
	}
	public DrawableContextNode(	String text,android.graphics.Point coor,Paint paint,UUID id,int  action)
	{
		this.coordinate=coor;
		this.id=id;
		this.paint=paint;
		this.action=action;
		this.picture=0;
		this.width=this.height=0;
		this.text=text;
	}
}
