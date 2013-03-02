package shaotian.android.blackboard.utility;

import java.util.UUID;

import android.R;

import shaotian.android.blackboard.Drawable.DrawableContextNode;
import shaotian.android.blackboard.Drawable.DrawableStore;

public class Pallette {

	 public static final int DEFAULT_SIZE=10;
	 public static final String DEFAULT_TEXT="please enter text";
	 public static final int DEFAULT_COLOR=android.graphics.Color.GREEN;
	 public int picture;
	 public String text;
	 public float size;
	 public int color;
	 public UUID drawableID;
	 public DrawableContextNode curnode;
	public static Pallette Instance()
	{
		if(pallette==null)
			pallette=new Pallette();
		return pallette;
		
	}
	
	public Pallette()
	{
		size=DEFAULT_SIZE;
		color=DEFAULT_COLOR;
		text=DEFAULT_TEXT;
		drawableID=DrawableStore.Instance().getCurve();
		picture=R.drawable.dark_header;
	}
	
	
	private static Pallette pallette;
}
