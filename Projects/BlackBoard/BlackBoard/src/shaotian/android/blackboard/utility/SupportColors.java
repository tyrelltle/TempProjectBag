package shaotian.android.blackboard.utility;

public enum SupportColors {
RED(android.graphics.Color.RED),
YELLOW(android.graphics.Color.YELLOW),
GREEN(android.graphics.Color.GREEN),
GRAY(android.graphics.Color.GRAY),
CYAN(android.graphics.Color.CYAN),
DKGRAY(android.graphics.Color.DKGRAY),
MAGENTA(android.graphics.Color.MAGENTA),
WHITE(android.graphics.Color.WHITE);


private int code;

private SupportColors(int c) {
  code = c;
}

public int getCode() {
  return code;
}
}
