package shaotian.android.blackboard.Drawable;

import java.util.UUID;

import shaotian.android.blackboard.BlackBoardActivity;
import shaotian.android.blackboard.R;
import shaotian.android.blackboard.state.CommonManipulator;
import shaotian.android.blackboard.state.Manipulator;
import shaotian.android.blackboard.utility.Pallette;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.view.MotionEvent;

public class Eraser implements Drawable{
	public static UUID id=UUID.randomUUID();
	
	
	public void Draw(Canvas canvas, DrawableContext context) {
		// TODO Auto-generated method stub
		//canvas.drawPoint(context.coordinate.x, context.coordinate.y, context.paint);
		
		
		DrawableContextNode n=context.nodes.get(context.curToDraw);
		n.paint.setColor(Color.WHITE);
		canvas.drawCircle(n.coordinate.x, n.coordinate.y, n.paint.getStrokeWidth(), n.paint);
		
	}

	public boolean hit(DrawableContextNode context,int x, int y) {


		return false;
	}

	public void highlight(Canvas canvas,DrawableContextNode context) {

		context.paint.setColor(Color.BLACK);
		canvas.drawCircle(context.coordinate.x, context.coordinate.y, context.paint.getStrokeWidth(), context.paint);

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
