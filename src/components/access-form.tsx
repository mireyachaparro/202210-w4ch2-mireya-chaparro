import { SyntheticEvent, useState } from "react";

type User = {
  username: string;
  password: string;
  repeatpassword: string;
  acounttype: string;
};

export function AccountForm() {
  const user: User = {
    username: "",
    password: "",
    repeatpassword: "",
    acounttype: "",
  };

  const [form, setForm] = useState(user);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log("enviando");
  };

  const handleForm = (ev: SyntheticEvent) => {
    //{recibe el objeto evento}
    const element = ev.target as HTMLFormElement; //la variable recoge el elemento, que es el input en el q estamos haciendo clic, ese input tiene name.
    console.log("input", element.name); //aqui recoge el name de ese input (que ahora mismo es name, age o phone)
    setForm({ ...form, [element.name]: element.value }); //quiero que el cambio q he hecho al escribir se guarde en el correspondiente valor del estado del input. a demas, cada vez que se va escribiendo, se va guardando
  };

  const handleCheck = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    console.log("change", element.name);
    setForm({ ...form, [element.name]: element.checked });
  };

  //principios de diseño: DRY (dont repeat yourself) / KISS (Keep it simple, Stupid)
  //para no repetir lo deabajo, pone el ternario
  //si es igual, guardamos el valor de element.checked, y sino el de element.value

  return (
    <form onSubmit={handleSubmit}>
      <legend>Formulario</legend>
      <div>
        <input
          type="text"
          name="username"
          id=""
          placeholder="Dime tu username"
          value={form.username}
          onInput={handleForm}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id=""
          placeholder="Dime tu password"
          value={form.password}
          onInput={handleForm}
        />
      </div>
      <div>
        <input
          type="password"
          name="repeatpassword"
          id=""
          placeholder="Repite tu password"
          value={form.repeatpassword}
          onInput={handleForm}
        />
      </div>
      <div>
        <select>
          <option value="personal">Personal</option>
          <option value="pro">Pro</option>
          <option selected value="business">
            Business
          </option>
        </select>
      </div>
      <button type="submit">Aceptar</button>
    </form>
    /*select y radio utilizan el value*/
  );
}
