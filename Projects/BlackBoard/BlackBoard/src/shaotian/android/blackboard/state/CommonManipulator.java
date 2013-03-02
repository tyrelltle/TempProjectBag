package shaotian.android.blackboard.state;

import shaotian.android.blackboard.Drawable.DrawableContextNode;
import shaotian.android.blackboard.controller.DrawShapeController;
import android.content.Context;
import android.view.MotionEvent;

public class CommonManipulator extends Manipulator{

	public CommonManipulator(DrawableContextNode c, Context a) {
		super(c, a);
		// TODO Auto-generated constructor stub
	}


	@Override
	public void click(MotionEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void move(MotionEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void create() throws Exception {
		// TODO Auto-generated method stub
		DrawShapeController c=DrawShapeController.Instance(null,null,null);
		c.model.valueChanged();
	}

}
