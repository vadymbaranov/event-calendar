import React from 'react';

export const InputField: React.FC = () => {
  // To show errors only if the field was touched (onBlur)
  const [touched, setToched] = useState(false);
  const hasError = touched && required && !value.trim();
  const hasWrongUrl = touched && !hasProperUrl;

  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>

      <div className="control">
        <input
          id={id}
          data-cy={`movie-${name}`}
          className={classNames('input', {
            'is-danger': hasError,
          })}
          type="text"
          placeholder={`Enter ${label}`}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={() => setToched(true)}
        />
      </div>

      {hasError && <p className="help is-danger">{`${label} is required`}</p>}

      {hasWrongUrl && (
        <p className="help is-danger">{`${label} has wrong url`}</p>
      )}
    </div>
  );
};
