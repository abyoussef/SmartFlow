F = (a) ->
  s = 0
  i = 0
  while i < a.length
    s = s + sin(a[i] * a[i])
    i++
  s

multiply = (x, nb) ->
  y = new Array(x.length)
  p = 0
  while p < x.length
    y[p] = x[p] * nb
    p++
  y

add = (x, y) ->
  z = new Array(x.length)
  i = 0
  while i < x.length
    z[i] = x[i] + y[i]
    i++
  z

GradientDescent = (x, dx, gamma, iterations) ->
  i = 0
  while i < iterations
    grad = new Array(x.length)
    j = 0
    while j < x.length
      y = multiply(x, 1)
      y[j] = y[j] + dx[j]
      grad[j] = (F(y) - F(x)) / dx[j]
      j++
    x = add(x, multiply(grad, -gamma))
    i++
  x

multiGradientDescent = (dx, min_x, max_x, gamma, iterations_per_init, inits) ->
  x0 = multiply(add(min_x, max_x), 0.5)
  xmin = GradientDescent(x0, dx, gamma, iterations_per_init)
  i = 1
  while i < inits
    k = 0
    while k < x0.length
      x0[k] = Math.random() * (max_x[0] - (min_x[0])) + min_x[0]
      k++
    xmin_new = GradientDescent(x0, dx, gamma, iterations_per_init)
    if F(xmin_new) < F(xmin)
      xmin = xmin_new
    i++
  xmin

# ---
# generated by js2coffee 2.2.0