package shaotian.android.blackboard.Model;

import java.util.Observable;

public abstract class Model extends Observable {
	Object model;
	public Model()
	{}
	public void valueChanged()
	{this.setChanged();
	 this.notifyObservers(model);}
	
	public Object getModel()
	{return model;}
}
