package shaotian.android.blackboard.Drawable;

import java.util.ArrayList;
import java.util.UUID;

import shaotian.android.blackboard.state.CommonManipulator;
import shaotian.android.blackboard.state.Manipulator;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Path.FillType;
import android.view.MotionEvent;

public class Curve implements Drawable{
	public static UUID id=UUID.randomUUID();

	
	public Curve()
	{
	
	}
	
	
	public void Draw(Canvas canvas, DrawableContext context) {
		// TODO Auto-generated method stub
		DrawableContextNode curN=context.nodes.get(context.curToDraw);
		
		switch(context.nodes.get(context.curToDraw).action)
		{
		case MotionEvent.ACTION_DOWN:
			
			  
			 break;
		case MotionEvent.ACTION_MOVE:
			 
				 	android.graphics.Point cur=curN.coordinate;
				 	android.graphics.Point pre=null;
				 	if(context.curToDraw-1>=0)
				 		pre=context.nodes.get(context.curToDraw-1).coordinate;
					
					Path path=new Path();
					if(pre==null)
						path.moveTo(cur.x, cur.y);
					else
						path.moveTo(pre.x, pre.y);
					//path.lineTo(cur.x, cur.y);
					path.quadTo(pre.x, pre.y,cur.x, cur.y);
			 		curN.paint.setStyle(Paint.Style.STROKE);
			 		//canvas.drawCircle(cur.x, cur.y, curN.paint.getStrokeWidth(), curN.paint);
			 		canvas.drawPath(path, curN.paint);
			 		
			 break;
		case MotionEvent.ACTION_UP:
			 
				
			 break;
		}
		
	
			    
		
		
	}
	/*public void Draw(Canvas canvas, DrawableContextNode context) {
		// TODO Auto-generated method stub
		if(context.pre==null || context.pre.mouseup)
			canvas.drawPoint(context.coordinate.x, context.coordinate.y, context.paint);
		else
		{
			android.graphics.Point cur=context.coordinate;
			android.graphics.Point pre=context.pre.coordinate;
			canvas.drawLine(pre.x, pre.y, cur.x, cur.y, context.pre.paint);
			
		}
	}*/
	public String name() {
		// TODO Auto-generated method stub
		return "Curve";
	}


	public boolean hit(DrawableContextNode context,int x, int y) {
		// TODO Auto-generated method stub
		/*int width;
		width=(int) context.paint.getStrokeWidth();
		
		android.graphics.Point coord=context.coordinate;
		if(x>=coord.x&&x<=coord.x+width&&y>=coord.y&&y<=coord.y+width)
			return true;*/
		return false;
	}


	public void highlight(Canvas canvas,DrawableContextNode context) {
		// TODO Auto-generated method stub
		
	}


	public void click(Canvas canvas, DrawableContextNode context,
			Context appcontext, MotionEvent event) {
		// TODO Auto-generated method stub
		
	}


	public void move(Canvas canvas, DrawableContextNode context,
			Context appcontext, MotionEvent event) {
		// TODO Auto-generated method stub
		
	}


	public Manipulator getManipulator(DrawableContextNode c, Context a) {
		// TODO Auto-generated method stub
		return new CommonManipulator(null,null);
	}





	



	
}
