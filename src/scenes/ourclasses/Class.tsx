type Props = {
  name: string;
  description?: string;
  image: string;
};

function Class({ name, description, image }: Props) {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <img src={image} alt={`${image}`} />
      </div>
    </li>
  );
}

export default Class;
