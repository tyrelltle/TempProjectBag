package shaotian.android.blackboard.Drawable;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class DrawableStore {
	Map<UUID,Drawable> drawables;
	 static DrawableStore drawablestore;
	public static DrawableStore Instance()
	{
		if(drawablestore==null)
			drawablestore=new DrawableStore();
		return drawablestore;
	}
	public DrawableStore()
	{
		drawables=new HashMap<UUID,Drawable>();
	}
	
	public Drawable getDrawable(UUID id)
	{
		return drawables.get(id);
	}
	
	
	public UUID getPoint()
	{
		UUID id=Point.id;
		if(!drawables.containsKey(id))
			drawables.put(id, new Point());
		return id;
		
	}
	public UUID getCurve()
	{
		UUID id=Curve.id;
		if(!drawables.containsKey(id))
			drawables.put(id, new Curve());
		return id;
		
	}
	public UUID getEraser()
	{
		UUID id=Eraser.id;
		if(!drawables.containsKey(id))
			drawables.put(id, new Eraser());
		return id;
		
	}
	
	public UUID getText()
	{
		UUID id=Text.id;
		if(!drawables.containsKey(id))
			drawables.put(id, new Text());
		return id;
		
	}
	
	
}
