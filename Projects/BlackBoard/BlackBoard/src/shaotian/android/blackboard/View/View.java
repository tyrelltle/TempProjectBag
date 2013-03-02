package shaotian.android.blackboard.View;

import java.util.Observable;
import java.util.Observer;
import java.util.UUID;

import shaotian.android.blackboard.Drawable.DrawableContext;
import shaotian.android.blackboard.controller.Controller;
import shaotian.android.blackboard.controller.DrawShapeController;

import android.content.Context;
import android.util.AttributeSet;

public abstract class View extends android.view.View implements Observer{
	Controller controller;
	public View(Context context) {
		super(context);
	
	}
	public abstract void update(Observable arg0, Object arg1);
	public View(Context context, AttributeSet attr)
	{super(context,attr);
		}
	
	public View(Context context,AttributeSet attr,int sty)
	{
		super(context,attr,sty);
		
	}
	
	public void addController(DrawShapeController controller2) {
		// TODO Auto-generated method stub
		controller=controller2;
		
	}
	public static UUID id=UUID.randomUUID();
}
