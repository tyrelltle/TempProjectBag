package shaotian.iquestion.token;

public class TextToken implements IToken {
	String value;
	
	@Override
	public boolean equals(Object arg0) {
		// TODO Auto-generated method stub
		if(!(arg0 instanceof TextToken))
		 throw new IllegalArgumentException();
		return ((TextToken)arg0).value.equals(value);
	}

	public TextToken(String v)
	{
		this.value=v;
	}

	@Override
	public Object getValue() {
		// TODO Auto-generated method stub
		return this.value;
	}

	@Override
	public void setValue(Object v) {
		// TODO Auto-generated method stub
		this.value=v.toString();
	}
	


}
