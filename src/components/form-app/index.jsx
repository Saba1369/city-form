import React, { useEffect, useState } from "react";
import FormSelect from "./form-select";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CITIES_URL } from "../urls";

const FormApp = () => {
  const [cities, setCities] = useState([]);
  const [counties, setCounties] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(CITIES_URL);
      if (!response.ok) {
        throw new Error("get information failed!");
      }
      const citiesInfo = await response.json();
      setCities(citiesInfo);
    } catch {
      console.error("");
    } finally {
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const schema = yup
    .object()
    .shape({
      county: yup
        .string()
        .required("!وارد کردن شهرستان محل زندگیتان الزامی می باشد"),
    });
  const onSubmit = (e) => {
    console.log(e);
  };

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <h2 className="font-medium text-lg">:محل زندگی شما</h2>
      <form
        className="w-[300px] flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormSelect
          label="شهر"
          register={register("city")}
          keyValue={1}
          existFirstOpt={false}
          list={Object.keys(cities).filter((city) => city !== "id")}
          onChange={(e) => setCounties(cities[e.target.value])}
        />
        <FormSelect
          label="شهرستان"
          register={register("county")}
          keyValue={2}
          error={errors["county"]?.message}
          existFirstOpt={true}
          list={counties}
          onChange={()=>clearErrors("county")}
        />
        <button
          type="submit"
          className="border-2 rounded bg-rose-500 p-2 mt-5 border-slate-200 shadow-md shadow-slate-200 focus:border-blue-600 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormApp;
