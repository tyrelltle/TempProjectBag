package shaotian.android.blackboard.Drawable;

import java.util.UUID;

import shaotian.android.blackboard.BlackBoardActivity;
import shaotian.android.blackboard.R;
import shaotian.android.blackboard.state.ImageManipulator;
import shaotian.android.blackboard.state.Manipulator;
import shaotian.android.blackboard.state.TextManipulator;
import shaotian.android.blackboard.utility.Pallette;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.view.MotionEvent;

public class Text implements Drawable{
	public static UUID id=UUID.randomUUID();
	
	public void Draw(Canvas canvas, DrawableContext context) {
		// TODO Auto-generated method stub
		//canvas.drawPoint(context.coordinate.x, context.coordinate.y, context.paint);
		
		
		DrawableContextNode n=context.nodes.get(context.curToDraw);
	
		canvas.drawText(n.text,n.coordinate.x, n.coordinate.y, n.paint);
		 	
		 
		 
		 
		
		
	}

	public boolean hit(DrawableContextNode context,int x, int y) {

		/*int width,height;
		width=context.width;
		height=context.height;
		android.graphics.Point coord=context.coordinate;
		if(x>=coord.x&&x<=coord.x+width&&y>=coord.y&&y<=coord.y+height)
			return true;*/
		return false;
	}

	public void highlight(Canvas canvas,DrawableContextNode context) {
		android.graphics.Point coord=context.coordinate;
		Paint p=new Paint();
		p.setColor(android.graphics.Color.YELLOW);
		p.setStrokeWidth(5);
		canvas.drawLine(coord.x, coord.y, coord.x+context.width, coord.y, p);
		canvas.drawLine(coord.x, coord.y, coord.x, coord.y+context.height, p);
		canvas.drawLine(coord.x+context.width, coord.y, coord.x+context.width, coord.y+context.height, p);
		canvas.drawLine(coord.x, coord.y+context.height, coord.x+context.width, coord.y+context.height, p);

	}

	public void click(Canvas canvas, DrawableContextNode context,
			Context appcontext, MotionEvent event) {
		// TODO Auto-generated method stub
		
	}

	public void move(Canvas canvas, DrawableContextNode context,
			Context appcontext, MotionEvent event) {
		// TODO Auto-generated method stub
		context.coordinate.x=(int) event.getX()-context.width/2;
		context.coordinate.y=(int) event.getY()-context.height/2;
		
	}

	public Manipulator getManipulator(DrawableContextNode context,Context appcontext) {
		return new TextManipulator( context, appcontext);
	
	}



	
	
}
