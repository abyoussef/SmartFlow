function F(a) {
     s = 0
  
     for (i=0;i<a.length;i++)
    {
        s = s + sin(a[i]*a[i]);     
     } 
     return s;
}

function multiply (x, nb)
{
   var y = new Array (x.length);
   
   for (var p=0;p<x.length;p++)
   {
        y[p] = x[p] * nb;
   }   
   return y;
}

function add (x,y)
{

        var z = new Array(x.length);
	for (var i = 0;i< x.length;i++)
         {
             z[i] = x[i] + y[i];
         }
          return z;
}

function GradientDescent(x,dx,gamma,iterations)
{

 for (var i=0;i<iterations;i++)
   {
      var grad = new Array(x.length);

      for (var j=0;j<x.length;j++)
       {

        var y = multiply(x,1);

	 y[j] = y[j] + dx[j];
   	grad[j] =   (F(y) - F(x))/dx[j];
      }

      x = add ( x  , multiply(grad,-gamma) );


   }

 
   return x;
}


function multiGradientDescent(dx,min_x,max_x,gamma,iterations_per_init, inits)
{
       var x0 = multiply(add(min_x,max_x),0.5);
      var xmin = GradientDescent(x0,dx,gamma,iterations_per_init)
      for (var i=1;i<inits;i++)
	{
			for (k=0;k<x0.length;k++)
			{
			   x0[k] = Math.random() * (max_x[0] - min_x[0]) + min_x[0];		
			}

                        xmin_new =  GradientDescent(x0,dx,gamma,iterations_per_init)
			if (F(xmin_new) < F(xmin) ) xmin = xmin_new;
		
	}
     
	return xmin;
}
