package shaotian.iquestion.selection;

import java.util.ArrayList;

public class MultiSelection implements ISelection{
	public ArrayList<Integer> sels;
	
	public MultiSelection(int ... args)
	{
		sels=new ArrayList<Integer>();
		for(int arg : args)
			sels.add(arg);
	}

}
