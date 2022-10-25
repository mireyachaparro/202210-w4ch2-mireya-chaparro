import { SyntheticEvent, useState } from "react";

type User = {
  name: string;
  lastname: string;
  birthdate: string;
  gender: string;
  email: string;
  isOk: boolean;
  username: string;
  password: string;
  repeatpassword: string;
  acounttype: string;
};

export function PersonalForm() {
  const user: User = {
    name: "",
    lastname: "",
    birthdate: "",
    gender: "",
    email: "",
    isOk: false,
    username: "",
    password: "",
    repeatpassword: "",
    acounttype: "",
  };

  const [form, setForm] = useState(user);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
  };

  const handleForm = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    setForm({
      ...form,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
  };

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
        <div>
          <label>Fecha de nacimiento</label>
        </div>
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
          type="radio"
          name="gender"
          id=""
          onChange={handleForm}
          value={"Male"}
          checked={form.gender === "Male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          id=""
          onChange={handleForm}
          value={"Female"}
          checked={form.gender === "Female"}
        />
        Female
        <input
          type="radio"
          name="gender"
          id=""
          onChange={handleForm}
          value={"Other"}
          checked={form.gender === "Other"}
        />
        Other
        <input
          type="radio"
          name="gender"
          id=""
          onChange={handleForm}
          value={"Prefer not to mention"}
          checked={form.gender === "Prefer not to mention"}
        />
        Prefer not to mention
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
            onChange={handleForm}
          />
          ¿Desea recibir información de nuestra newsletter?
        </label>
      </div>
      <button type="submit">Next</button>
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
        <div>
          <label>Tipo de cuenta</label>
        </div>
        <select>
          <option value={"personal"} onChange={handleForm}>
            Personal
          </option>
          <option value={"Pro"} onChange={handleForm}>
            Pro
          </option>
          <option value={"business"} onChange={handleForm}>
            Business
          </option>
        </select>
      </div>
      <button type="submit">Previous</button>
      <button type="submit">Next</button>
      <div>
        <h2>Los datos introducidos son:</h2>
        <ul>
          <li>Nombre: {form.name}</li>
          <li>Apellido: {form.lastname}</li>
          <li>Fecha de nacimiento: {form.birthdate}</li>
          <li>Genero: {form.gender}</li>
          <li>Email: {form.email}</li>
          <li>Username: {form.username}</li>
          <li>Password no se muestra por motivos de seguridad</li>
          <li>Tipo de cuenta: </li>
        </ul>
      </div>
      <button type="submit">Acceder</button>
    </form>
  );
}
