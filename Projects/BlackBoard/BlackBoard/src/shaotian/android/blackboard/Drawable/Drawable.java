package shaotian.android.blackboard.Drawable;

import java.util.UUID;

import shaotian.android.blackboard.state.Manipulator;

import android.content.Context;
import android.graphics.Canvas;
import android.view.MotionEvent;

public interface Drawable {
	void Draw(Canvas canvas, DrawableContext context);
	boolean hit(DrawableContextNode context,int x, int y);
	void highlight(Canvas canvas,DrawableContextNode context);
	void click(Canvas canvas,DrawableContextNode context, Context appcontext,MotionEvent event);
	void move(Canvas canvas,DrawableContextNode context, Context appcontext,MotionEvent event);
	Manipulator getManipulator(DrawableContextNode c,Context a);
	public static UUID id=null;
}
