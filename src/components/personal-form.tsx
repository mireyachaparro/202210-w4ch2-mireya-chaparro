import { SyntheticEvent, useState } from "react";

type User = {
  name: string;
  lastname: string;
  birthdate: string;
  gender: string;
  email: string;
  isOk: boolean;
};

export function PersonalForm() {
  const user: User = {
    name: "",
    lastname: "",
    birthdate: "",
    gender: "",
    email: "",
    isOk: false,
  };

  const [form, setForm] = useState(user);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log("enviando");
    console.log(form.gender);
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
          name="name"
          id=""
          placeholder="Dime tu nombre"
          value={form.name}
          onInput={handleForm}
        />
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          id=""
          placeholder="Dime tu apellido"
          value={form.lastname}
          onInput={handleForm}
        />
      </div>
      <div>
        <input
          type="date"
          name="birthdate"
          id=""
          value={form.birthdate}
          onInput={handleForm}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Dime tu email"
          value={form.email}
          onInput={handleForm}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="isOk"
            checked={form.isOk}
            onChange={handleCheck}
          />
          ¿Desea recibir información de nuestra newsletter?
        </label>
      </div>
      <button type="submit">Aceptar</button>
    </form>
    /*select y radio utilizan el value*/
  );
}
