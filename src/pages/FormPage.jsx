import Checkbox from "../component/Checkbox";
import { useForm } from "react-hook-form";
import Input from "../component/Input";
import Radio from "../component/Radio";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit"
  })
  const checkboxRegister = register("checkbox", {
    required: "체크해주세요"
  });

  const inputRegister = register("input", {
    required: "필수 입력값입니다.",
  });

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Checkbox
        label="test"
        id="checkbox"
        register={checkboxRegister}
        errors={errors?.checkbox && errors?.checkbox.message}
      />
      <Input
        label="input"
        id="input"
        register={inputRegister}
        errors={errors?.input && errors?.input.message}
      />
      <div className="form-wrap">
        <Radio 
          label="radio1" 
          id="radio1" 
          name="radio-test" 
        />
        <Radio 
          label="radio2" 
          id="radio2" 
          name="radio-test" 
        />
      </div>

      <button type="submit">제출하기</button>
    </form>
  );
};

export default FormPage;