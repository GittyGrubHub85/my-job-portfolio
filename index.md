## Welcome to my Portfolio

Here you can see my collection of projects that I've made over the past years.

### HTML

Here are my files that were simply written by HTML.

1. [Website 6](https://gittygrubhub85.github.io/my-job-portfolio/HTML/my-website-6/)
2. [Website 7](https://gittygrubhub85.github.io/my-job-portfolio/HTML/my-website-7/)

### Java

Frog Jumper

This application is trying to calculate how happy hops can a frog hop based on the number range with the given number (3rd argument)
```
import java.math.*;

public class Lesson7_21_21_FrogJmp {
	public static void main(String[] args) {
		System.out.println((int)solution(10, 85, 30));
		System.out.println((int)solution(1, 1, 3));
		System.out.println((int)solution(3, 999111321, 7));
	}
	
	public static int solution(int X, int Y, int D) {
      return (int)Math.ceil( ((double)Y-(double)X)/(double)D );
  }
}
```
